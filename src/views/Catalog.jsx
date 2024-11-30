import { Link } from 'react-router-dom';
import axios from 'axios';
import { useEffect, useState } from 'react';
import ModalEditProduct from '../components/ModalEditProduct';
import Swal from 'sweetalert2';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons';
import DataTable from 'react-data-table-component';

const Catalog = () => {

    const [dataProducts, setDataProducts] = useState([]);
    const [showModal, setShowModal] = useState(false);
    const [id, setId] = useState(0);

    const apiUrl = 'http://localhost/products/api.php';
    let config = {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }

    const colums = [
        {
            name: 'id',
            selector: row => row.id,
        },
        {
            name: 'Producto',
            selector: row => row.nombre,
        },
        {
            name: 'Precio',
            selector: row => row.precio,
        },
        {
            name: 'Descripción',
            selector: row => row.descripcion,
        },
        {
            name: 'Editar',
            selector: row => <div className='cursor-pointer hover:text-yellow-500' onClick={() => { openModalEdit(row.id) }}>Editar</div>,
        },
        {
            name: 'Eliminar',
            selector: row => <div className='cursor-pointer hover:text-red-500' onClick={() => { deleteProduct(row.id) }}><FontAwesomeIcon icon={faTrash} /></div>,
        },
    ];

    


    const getAllProducts = async () => {
        const res = await axios.get(`${apiUrl}/productos`, config);
        console.log(res);
        setDataProducts(res.data);
    }

    const openModalEdit = (id) => {
        setId(id);
        setShowModal(true);
    }

    const deleteProduct = (id) => {

        Swal.fire({
            title: "¿Está seguro?",
            text: "¡No podrás revertir esto!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "¡Sí, borralo!"
        }).then(async (result) => {
            if (result.isConfirmed) {
                await axios.delete(`${apiUrl}/productos/${id}`, config)
                    .then(response => {
                        console.log(response);
                        Swal.fire({
                            title: "¡Eliminado!",
                            text: "El producto ha sido eliminado.",
                            icon: "success"
                        });
                    })
                    .catch(err => {
                        console.error()
                    })
                getAllProducts();

            }
        });
    }


    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <section className="text-gray-600 body-font">
            <div className="p-4">
                <Link to={'/registrar-producto'}>
                    <button className="flex ml-auto text-white bg-indigo-500 border-0 py-1 px-6 focus:outline-none hover:bg-indigo-600 rounded">Registrar Producto</button>
                </Link>
            </div>
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap -m-4">
                    {dataProducts.length > 0
                        ? dataProducts.map((item, key) => {
                            return <div className="p-4 md:w-1/3" key={key}>
                                <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden">
                                    <img className="lg:h-48 md:h-36 w-full object-cover object-center" src="https://dummyimage.com/720x400" alt="blog" />
                                    <div className="p-6">
                                        <h2 className="tracking-widest text-xs title-font font-medium text-gray-400 mb-1">{item.id} {item.precio}</h2>
                                        <h1 className="title-font text-lg font-medium text-gray-900 mb-3">{item.nombre}</h1>
                                        <p className="leading-relaxed mb-3">{item.descripcion}</p>
                                        <div className="flex items-center flex-wrap ">
                                            <button onClick={() => { openModalEdit(item.id) }} className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Editar producto
                                                <svg className="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                                                    <path d="M5 12h14"></path>
                                                    <path d="M12 5l7 7-7 7"></path>
                                                </svg>
                                            </button>
                                            <button onClick={() => { deleteProduct(item.id) }} className="text-gray-500 inline-flex items-center md:mb-2 lg:mb-0">Eliminar producto
                                                <FontAwesomeIcon icon={faTrash} />
                                            </button>
                                            <span className="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                                    <circle cx="12" cy="12" r="3"></circle>
                                                </svg>1.2K
                                            </span>
                                            <span className="text-gray-400 inline-flex items-center leading-none text-sm">
                                                <svg className="w-4 h-4 mr-1" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                                                    <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                                </svg>6
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        })
                        :
                        <div className='w-full text-center'>
                            No hay productos registrados
                        </div>
                    }
                </div>
            </div>
            {showModal && <ModalEditProduct id={id} setShowModal={setShowModal} getAllProducts={getAllProducts} />}

            {/* Datatable */}

            <div className='w-full'>
                <DataTable
                    columns={colums}
                    data={dataProducts}
                    pagination
                />
            </div>
        </section>
    )
}

export default Catalog;