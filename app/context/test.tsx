"use client";

import {
  createContext,
  useContext,
  useReducer,
  useMemo,
  type ReactNode,
  useState,
} from "react";
import { templateRegistry } from "@/app/styles/registry";
import {
  IconState,
  iconState as initialIconState,
  SectionVisibilityState,
  sectionVisibilityState,
} from "../types/styles";

// 1. Define the "DNA" of the resume
export interface ThemeConfig {
  primaryColor: string;
  secondaryColor: string;
  borderColor: string;
  textColor: string;
  fontFamily: string;
  fontSizeContent: number;
  fontSizeTitle: number;
  fontSizeName: number;
  fontSizeContactText: number;
  fontSizeSubName: number;
}

interface StyleState {
  activeTemplate: string;
  theme: ThemeConfig;
  iconState: IconState;
  sectionVisibility: SectionVisibilityState;
}

// 2. Simplified Actions
type StyleAction =
  | { type: "SET_TEMPLATE"; payload: string }
  | { type: "UPDATE_THEME"; payload: Partial<ThemeConfig> }
  | { type: "SET_COLOR"; payload: Partial<ThemeConfig> }
  | {
      type: "SET_VISIBILITY";
      key: string; // The section name: "experience", "education", etc.
      data: boolean;
    };

const initialTheme: ThemeConfig = {
  primaryColor: "#004F7A",
  secondaryColor: "#64748B",
  borderColor: "#B0BEC5",
  textColor: "#212121",
  fontFamily: "Inter",
  fontSizeContent: 10,
  fontSizeTitle: 16.1,
  fontSizeName: 36,
  fontSizeSubName: 12,
  fontSizeContactText: 8,
};

const initialState: StyleState = {
  activeTemplate: "templateTwo",
  theme: initialTheme,
  iconState: initialIconState,
  sectionVisibility: sectionVisibilityState,
};

function styleReducer(state: StyleState, action: StyleAction): StyleState {
  switch (action.type) {
    case "SET_TEMPLATE":
      return { ...state, activeTemplate: action.payload };
    case "UPDATE_THEME":
      return { ...state, theme: { ...state.theme, ...action.payload } };
    case "SET_COLOR":
      console.log("Current Theme Color:", state.theme.primaryColor);
      return {
        ...state,
        theme: {
          ...state.theme,
          ...action.payload, 
        },
      };

    case "SET_VISIBILITY": {
      const { key, data } = action; 

      return {
        ...state,
        sectionVisibility: {
          ...state.sectionVisibility,
          [key]: { visibility: data }, 
        },
      };
    }
    default:
      return state;
  }
}

// Contexts
const StyleStateContext = createContext<StyleState | null>(null);
// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ComputedStyleContext = createContext<any | null>(null); // The actual CSS objects
const StyleDispatchContext = createContext<React.Dispatch<StyleAction> | null>(
  null
);

export function StyleProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(styleReducer, initialState);


  const computedStyles = useMemo(() => {
    const factory =
      templateRegistry[state.activeTemplate as keyof typeof templateRegistry] ||
      templateRegistry.templateTwo;
    const css = factory(state.theme);
    return {
      ...css,
      iconState: state.iconState,
      sectionVisibility: state.sectionVisibility,
    };
  }, [state.activeTemplate, state.theme, state.iconState, state.sectionVisibility]);

  return (
    <StyleStateContext.Provider value={state}>
      <ComputedStyleContext.Provider value={computedStyles}>
        <StyleDispatchContext.Provider value={dispatch}>
          {children}
        </StyleDispatchContext.Provider>
      </ComputedStyleContext.Provider>
    </StyleStateContext.Provider>
  );
}

// Hooks
export const useStyleState = () => {
  const ctx = useContext(StyleStateContext);
  if (!ctx) throw new Error("useStyleState must be used within StyleProvider");
  return ctx;
};

export const useStyles = () => {
  const ctx = useContext(ComputedStyleContext);
  if (!ctx) throw new Error("useStyles must be used within StyleProvider");
  return ctx;
};

export const useStyleDispatch = () => {
  const ctx = useContext(StyleDispatchContext);
  if (!ctx)
    throw new Error("useStyleDispatch must be used within StyleProvider");
  return ctx;
};
