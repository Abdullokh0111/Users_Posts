let response = (res, status, data) => {
  if (status >= 200 && status <= 205) {
    res.status(status).json({ status: "Successed", data });
  } else {
    res.status(status).json({ status: "Failed", message: data });
  }
};
