import toast from "react-hot-toast";

export const upload = async (e, callbackFunction) => {
  const file = e.target.files?.[0];

  if (file) {
    const uploadPromise = new Promise((resolve, reject) => {
      const data = new FormData();
      data.set("file", file);
      fetch("/api/upload", {
        method: "POST",
        body: data,
      }).then((response) => {
        if (response.ok) {
          response.json().then((link) => {
            callbackFunction(link);
            resolve(link);
          });
        } else {
          reject();
        }
      });
    });

    toast.promise(uploadPromise, {
      loading: "Uploading...",
      success: "Uploaded successfully ! ",
      error: "Upload error !",
    });
  }
};
