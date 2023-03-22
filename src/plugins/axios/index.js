import axios from "axios";

axios.defaults.baseURL = "https://beta.pokeapi.co/graphql/v1beta";
axios.defaults.headers.common["X-Method-Used"] = "graphiql";
axios.defaults.headers.post["Content-Type"] = "application/json";
axios.defaults.method = "post";

export default axios;
