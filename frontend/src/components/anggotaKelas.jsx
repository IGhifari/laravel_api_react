import { useState, useEffect } from 'react'
import axios from 'axios'


export default function AnggotaKelas() {

    const [anggotaKelas, setAnggotaKelas] = useState([]);

    useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/anggotaKelas")
    .then((res) => {
        setAnggotaKelas(res.data)
        
    })
    .catch((err) => {
        console.error(err)
    
    })
  }, [])
    return(
         <div>
  <h1>Daftar Anggota Kelas</h1>
  <table border={1} cellPadding={10} cellSpacing={0}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Nama</th>
        <th>Jenis Kelamin</th>
        <th>Alamat</th>
        <th>Aksi</th>
      </tr>
    </thead>
    <tbody>
      {anggotaKelas.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.nama}</td>
          <td>{item.jenis_kelamin}</td>
          <td>{item.alamat}</td>
          <td style={{ display: 'flex', gap: '10px' }}>
            <button>Edit</button>
            <button>Hapus</button>
            <button>View</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>

</div>
    )
}