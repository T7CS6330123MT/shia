import { useRouteError } from "react-router-dom";

export default function ErrorPage() {

  const error = useRouteError();
  const errorData = error.data
    .toString()
    .replace("Error: ", "")

  console.error(error);

  return (
    <div style={{
      display:"flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "10%",
      width: "100%" }}>
      <h1>Shia Has Encountered an Error!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i> <b>Error Code:</b> {error.status}</i><br/>
        <i> <b>Error Description:</b> {error.statusText}</i><br/>
        <i> <b>Error Internal:</b> {error.internal.toString()}</i><br/>
        <i> <b>Error Details:</b> {errorData}</i>
      </p>
    </div>
  );
}