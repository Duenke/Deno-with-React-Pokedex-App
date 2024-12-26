import { CSSProperties, FunctionComponent, useEffect } from "react";
import { useMsal, useMsalAuthentication } from "@azure/msal-react";
import { InteractionType } from "@azure/msal-browser";
import { AuthenticatedTemplate } from "@azure/msal-react";
import { UnauthenticatedTemplate } from "@azure/msal-react";

type Styles = { [key: string]: CSSProperties };

const styles: Styles = {
  main: {
    display: "grid",
    alignContent: "center",
    justifyContent: "center",
    border: "solid white 1px",
  },
};

/**
 * All page components must be wrapped in a top level `<main></main>`.
 */
const AuthorizedPage: FunctionComponent = () => {
  const { instance, inProgress } = useMsal();
  const { result, error, login } = useMsalAuthentication(
    InteractionType.Silent,
  );

  const activeAccount = instance.getActiveAccount();
  const alias = activeAccount ? activeAccount.username.split("@")[0] : null;

  useEffect(() => {
    if (result && !activeAccount) {
      instance.setActiveAccount(result.account);
    }

    if (!error && !activeAccount) {
      login(InteractionType.Popup).catch((error) => {
        if (error.errorCode !== "interaction_in_progress") {
          console.log({ error });
        }
      });
    }
  }, [result, error, login]);

  return (
    <main style={styles.main}>
      <UnauthenticatedTemplate>
        {inProgress
          ? <div>popup login in progress...</div>
          : <div>please login</div>}
      </UnauthenticatedTemplate>

      <AuthenticatedTemplate>
        <div>hello {alias}!</div>
      </AuthenticatedTemplate>
    </main>
  );
};

export default AuthorizedPage;
