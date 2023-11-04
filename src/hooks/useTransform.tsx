import React, { ReactElement } from 'react';

type ComponentMap = Record<string, React.ComponentType<unknown>>;

interface Row {
  id: number;
  columns: Column[];
}

interface Column {
  headerName: string;
  componentConfig: {
    component: ReactElement;
  };
}

export const useTransformData = (
  data: Record<string, unknown>[],
  componentMap: ComponentMap
): Row[] => {
  return data.map((row, rowIndex) => {
    const rowComponents: Column[] = Object.entries(componentMap).map(
      ([key, Component]) => {
        return {
          headerName: key,
          componentConfig: {
            component: <Component data={row} />,
          },
        };
      }
    );

    return { id: rowIndex, columns: rowComponents };
  });
};
