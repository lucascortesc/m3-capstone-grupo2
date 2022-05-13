import api from "../services/api";

export const verificarToken = async (token, user) => {
  let verification;

  if (user) {
    await api
      .get(`/users/${user.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then(() => (verification = true))
      .catch(() => (verification = false));

    if (!verification) {
      localStorage.clear();
      return false;
    } else {
      return true;
    }
  }
  return false;
};
