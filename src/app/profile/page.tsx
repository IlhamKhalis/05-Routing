export default function Profile() {
    const biodata = {
        nama: "Ilham Khalis Putra Agatha",
        nim: "2141720230",
        kelas: "3A",
    };

    return (
        <div>
            <h1>Welcome to Profile</h1>
            <h2>Nama: {biodata.nama}</h2>
            <h2>NIM: {biodata.nim}</h2>
            <h2>Kelas: {biodata.kelas}</h2>
        </div>
    );
}
