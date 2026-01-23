/* eslint-disable @typescript-eslint/no-explicit-any */
// style-context.tsx
"use client";

import { IconData } from "@/app/data/iconMap";
import {
  IconState,
  initialStyles,
  SectionVisibilityState,
  StyleState,
} from "@/app/types/styles";
import {
  createContext,
  CSSProperties,
  useContext,
  useReducer,
  type ReactNode,
} from "react";

export type UpdateStyleAction =
  | {
      type: "UPDATE_STYLE";
      section: keyof StyleState; 
      data: {
        headerTitle: {
          fontSize: number;
        };
        headerSubTitle: {
          fontSize: number;
        };
      };
    }
  | {
      type: "UPDATE_MARGIN";
      section: keyof StyleState;
      key: string;
      property: keyof Record<string, CSSProperties>;
      data: number;
    }
  | {
      type: "UPDATE_ICON";
      section: keyof StyleState;
      key: string;
      data: IconData[];
    }
  | {
      type: "SET_VISIBILITY";
      section: keyof StyleState;
      key: string;
      data: boolean;
    };

type StyleAction = UpdateStyleAction;

const StyleContext = createContext<StyleState | null>(null);
const StyleDispatchContext = createContext<React.Dispatch<StyleAction> | null>(
  null
);

function styleReducer(state: StyleState, action: StyleAction): StyleState {
  switch (action.type) {
    case "UPDATE_STYLE": {
      const { section, data } = action;

      console.log(state)

      const newState = {
        ...state,
        [section]: {
          ...state[section],
          headerTitle: {
            ...state[section].headerTitle,
            fontSize: data.headerTitle.fontSize,
          },
          headerSubTitle: {
            ...state[section].headerSubTitle,
            fontSize: data.headerSubTitle.fontSize,
          },
        },
      };

      return newState;
    }

    case "UPDATE_MARGIN": {
      const { section, data, key, property } = action;
      console.log(data + .1)
      
    
      return {
        ...state,
        [section]: {
          ...state[section],
          [key]: {
            ...state[section][key],
            [property]: data,
          },
        },
      };
    }

    case "UPDATE_ICON": {
      const { section, data, key } = action;

      return {
        ...state,
        [section]: {
          ...state[section],
          [key]: data,
        },
      };
    }

    case "SET_VISIBILITY": {
      const { section, data, key } = action;

      const newVis = { visibility: data };

      return {
        ...state,
        [section]: {
          ...state[section],
          [key]: newVis,
        },
      };
    }

    default:
      return state;
  }
}

export function StyleProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(styleReducer, initialStyles);

  return (
    <StyleContext.Provider value={state}>
      <StyleDispatchContext.Provider value={dispatch}>
        {children}
      </StyleDispatchContext.Provider>
    </StyleContext.Provider>
  );
}

export function useStyles() {
  const ctx = useContext(StyleContext);
  if (!ctx) throw new Error("useStyles must be used inside <StyleProvider>");
  return ctx;
}

export function useStyleDispatch() {
  const ctx = useContext(StyleDispatchContext);
  if (!ctx)
    throw new Error("useStyleDispatch must be used inside <StyleProvider>");
  return ctx;
}
