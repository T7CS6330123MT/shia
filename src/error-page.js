import { useRouteError } from "react-router-dom";

export default function ErrorPage() {

  const error = useRouteError();
  const status = error["status"] || ""
  const statusText = error["statusText"] || ""
  const internal = error["internal"] || ""
  const errorData = error["data"] || ""

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
        <i> <b>Error Code:</b> {status}</i><br/>
        <i> <b>Error Description:</b> {statusText}</i><br/>
        <i> <b>Error Internal:</b> {internal.toString()}</i><br/>
        <i> <b>Error Details:</b> {
            errorData.toString().replace("Error: ", "")
        }</i>
      </p>
    </div>
  );
}