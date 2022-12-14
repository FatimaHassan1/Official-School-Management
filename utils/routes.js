const { WRONG_HTTP_METHOD } = require("../controllers/common/error_codes");
const { authenticate } = require("../middleware/authenticate");


const register_route = ({
  router = undefined,
  route = undefined,
  auth_required = false,
  admin_auth_required = false,
  get_method = undefined,
  post_method = undefined,
  put_method = undefined,
  delete_method = undefined,
} = {}) => {
  if (router != undefined || route != undefined) {
    let args = [route];
    if (auth_required) {
      args.push(authenticate);
    }

    if (get_method) {
      router.get(...args, get_method);
    } else if (post_method) {
      router.post(...args, post_method);
    } else if (put_method) {
      router.put(...args, put_method);
    } else if (delete_method) {
      router.delete(...args, delete_method);
    } else {
      router.post(...args, WRONG_HTTP_METHOD);
    }
  }
};

module.exports = {
  register_route,
};
