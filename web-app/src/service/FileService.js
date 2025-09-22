import { useDispatch } from "react-redux";
import instance from "./axios-customize";
import { updateProgress } from "../slice/files";

export const uploadOneFile = async (file, testTitle, fileCategory) => {
    const URL = "/file/upload";
    const bodyForm = new FormData();
    bodyForm.append("file", file);
    bodyForm.append("testTitle", testTitle, fileCategory);

    const response = await instance.post(URL, bodyForm, {
        headers: {
            "Content-Type": "multipart/form-data"
        }
    })
    return (await response).data;
}
export const uploadMultipleFiles = async (files, testTitle, fileCategory, onProgress) => {
    const URL = "/file/uploadMany";
    const bodyForm = new FormData();
    files.forEach((file) => {
        bodyForm.append("files", file);
    });
    bodyForm.append("testTitle", testTitle);
    bodyForm.append("fileCategory", fileCategory);

    const response = await instance.post(URL, bodyForm, {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        onUploadProgress: (event) => {
            const percent = Math.round((event.loaded * 100) / event.total);
            if (onProgress) {
                onProgress(percent);
            }
        },
    });

    return response.data;
};
