// Get an error string from GraphQLError and Errors.
// This function is mostly because calling `error.message` on a GraphQLError object
// returns a user-unfriendly string instead of just its first error message.
export function formatError(e: unknown): string {
  if (!e) return "Unknown error";
  if (
    // Check for GraphQLError
    typeof e === "object" &&
    "response" in e &&
    typeof (e as { response: unknown }).response === "object" &&
    (e as { response: { errors: { message: string }[] } }).response.errors?.[0]
      ?.message
  ) {
    return (e as { response: { errors: { message: string }[] } }).response
      .errors[0].message;
  }
  if (e instanceof Error) return e.message;
  return String(e);
}
