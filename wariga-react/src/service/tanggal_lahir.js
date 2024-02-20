import axios from "axios";

// class tanggal_lahir {
export const getTanggalLahirAll = async () => {
    // alert("hello");
    // eslint-disable-next-line no-useless-catch
    try {
        const response = await axios.get(
            "http://127.0.0.1:8000/api/tanggal_lahir/getall"
        );
        return response;
    } catch (error) {
        throw error;
    }

    // try {
    //     return await axios.get(
    //         "http://127.0.0.1:8000/api/tanggal_lahir/getall"
    //     );
    // } catch (error) {
    //     console.error({ error });
    // }
};
// }

// export default new tanggal_lahir();
