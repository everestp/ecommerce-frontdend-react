export const uploadToCloudinary = async (pics: any) => {
    const cloud_name = "dcpesbd8q";
    const upload_preset = "carten";

    if (1) {
        const data = new FormData();
        data.append("file", pics);
        data.append("upload_preset", "carten");
        // data.append("cloud_name", cloud_name);

        const res = await fetch("https://api.cloudinary.com/v1_1/dcpesbd8q/image/upload", {
            method: "post",
            body: data
        });
console.log("Cloudinary",res)
        const fileData = await res.json();
        return fileData.url;
    } else {
        console.log("error: pics not found");
    }
};
