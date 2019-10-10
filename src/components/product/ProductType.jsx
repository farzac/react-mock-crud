import React from 'react'
import Main from '../template/Main'
import ProductTypeForm from './ProductTypeForm'
import ProductTypeTable from './ProductTypeTable'
import axios from 'axios'

import { NotificationContainer, NotificationManager } from 'react-notifications'

const headerProps = {
    icon: 'product-hunt',
    title: 'Tipo de Produto',
    subtitle: 'Cadastro de Tipo de Produto: Incluir, Listar, Alterar e Excluir'
}

const baseUrl = 'http://localhost:3001/products'

const initialState = {
    productType: {
        id: '',
        name: '',
        description: '',
        startDate: Date,
        endDate: Date,
    },
    list: []
}

export default class ProductType extends React.Component {

    constructor() {
        super()

        this.state = { ...initialState }

        this.clear = this.clear.bind(this)
        this.save = this.save.bind(this)
        this.getUpdatedList = this.getUpdatedList.bind(this)
        this.updateField = this.updateField.bind(this)
        this.load = this.load.bind(this)
        this.remove = this.remove.bind(this)
        this.handleEnterPress = this.handleEnterPress.bind(this)
    }

    componentWillMount() {
        axios.get(baseUrl).then(response => {
            this.setState({ list: response.data })
        })
    }

    handleEnterPress(event) {
        if (event.key === 'Enter') {
            this.save()
        }
    }

    clear() {
        this.setState({ productType: initialState.productType })
    }

    save() {
        const productType = this.state.productType
        const method = productType.id ? 'put' : 'post'
        const url = productType.id ? `${baseUrl}/${productType.id}` : baseUrl

        if (productType.name === '' || productType.description === '') {
            NotificationManager.warning('Nome, descrição e data vigência são obrigatórios', 'Preencha os campos')
        } else {
            axios[method](url, productType)
                .then(response => {
                    const list = this.getUpdatedList(response.data)
                    this.setState({ productType: initialState.productType, list })
                    if (method === 'post')
                        NotificationManager.success('Tipo de produto criado com sucesso', 'Criar Tipo de produto')
                    else
                        NotificationManager.success('Tipo de produto alterado com sucesso', 'Editar Tipo de produto')
                })
        }

    }

    getUpdatedList(productType, add = true) {
        const list = this.state.list.filter(u => u.id !== productType.id)
        if (add)
            list.unshift(productType)
        return list
    }

    updateField(event) {
        const productType = { ...this.state.productType }
        productType[event.target.name] = event.target.value
        this.setState({ productType })
    }

    load(productType) {
        this.setState({ productType })
    }

    remove(productType) {
        axios.delete(`${baseUrl}/${productType.id}`)
            .then(response => {
                const list = this.getUpdatedList(productType, false)
                this.setState({ list })
                NotificationManager.success('Tipo de produto excluído com sucesso', 'Excluir Tipo de produto')
            })
    }

    render() {
        return (
            <Main {...headerProps}>
                <ProductTypeForm name={this.state.productType.name}
                    description={this.state.productType.description}
                    clear={this.clear}
                    save={this.save}
                    updateField={this.updateField}
                    handleEnterPress={this.handleEnterPress}
                />
                <ProductTypeTable list={this.state.list}
                    load={this.load}
                    remove={this.remove}
                />
            </Main>
        )
    }
}