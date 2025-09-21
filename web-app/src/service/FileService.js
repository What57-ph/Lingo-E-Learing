import instance from "./axios-customize";

export const uploadOneFile = async (file, testTitle) => {
    const URL = "/file/upload";
    const bodyForm = new FormData();
    bodyForm.append("file", file);
    bodyForm.append("testTitle", testTitle);

    const response = await instance.post(URL, bodyForm, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    return (await response).data;
}
export const uploadMultipleFiles = async (files, testTitle) => {
    const URL = "/file/uploadMany";
    const bodyForm = new FormData();
    bodyForm.append("file", files);
    bodyForm.append("testTitle", testTitle);

    const response = await instance.post(URL, bodyForm, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    return (await response).data;
}