import { AllEventsProvider } from "./AllEvents";
import { UserProvider } from "./User";

export const Providers = ({ children }) => {
  return (
    <AllEventsProvider>
      <UserProvider>{children}</UserProvider>
    </AllEventsProvider>
  );
};
