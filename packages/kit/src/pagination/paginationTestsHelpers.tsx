import { render } from "@testing-library/react";

import { PaginationContext } from "./PaginationRoot";

export const renderWithContext = (ui, contextProps) => {
  return render(
    <PaginationContext.Provider value={{ ...contextProps }}>
      {ui}
    </PaginationContext.Provider>
  );
};
