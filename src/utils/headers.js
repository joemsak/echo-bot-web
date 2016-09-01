export default function Headers(resource) {
  switch(resource) {
    case "shares":
      return ["id", "name", "post_id", "user_id"];

    case "users":
      return ["id", "name", "channel_id"];

    case "channels":
      return ["id", "name", "team_id"];

    case "teams":
      return ["id", "name"];

    default:
      return ["id", "url", "user_id"];
  }
};
