import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {
  const [buku, setBuku] = useState([])

  useEffect(() => {
    axios.get("http://127.0.0.1:8000/api/databuku")
      .then((res) => {
        setBuku(res.data)
        setLoading(false)
      })
      .catch((err) => {
        console.error(err)
        setLoading(false)
      })
  }, [])



  return (
    <div>
  <h1>Daftar Buku</h1>
  <table border={1} cellPadding={10} cellSpacing={0}>
    <thead>
      <tr>
        <th>ID</th>
        <th>Judul</th>
        <th>Pengarang</th>
        <th>Penerbit</th>
      </tr>
    </thead>
    <tbody>
      {buku.map((item) => (
        <tr key={item.id}>
          <td>{item.id}</td>
          <td>{item.judul}</td>
          <td>{item.pengarang}</td>
          <td>{item.penerbit}</td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
  )
}

export default App
