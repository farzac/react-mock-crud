import React from 'react'

export default props => {

    const lista = props.list

    return (
        <table className="table mt-4">
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nome</th>
                    <th>Descrição</th>
                    <th>Inicio vigência</th>
                    <th>Fim vigência</th>
                    <th>Ações</th>
                </tr>
            </thead>
            <tbody>
                {lista.map(productType => {
                    return (
                        <tr key={productType.id}>
                            <td>{productType.id}</td>
                            <td>{productType.name}</td>
                            <td>{productType.description}</td>
                            <td>{productType.startDate}</td>
                            <td>{productType.endDate}</td>
                            <td>
                                <button className="btn btn-warning" title='Editar' onClick={() => props.load(productType)}>
                                    <i className="fa fa-pencil"></i>
                                </button>
                                <button className="btn btn-danger ml-2" id='btn-excluir' title='Excluir' onClick={() => props.remove(productType)}>
                                    <i className="fa fa-trash"></i>
                                </button>
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}