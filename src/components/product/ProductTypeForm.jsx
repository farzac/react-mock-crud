import React from 'react'

export default props =>
    <div className="form">
        <div className="row">
            <div className="col-6 col-md-7">
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text"
                        name="name"
                        id="name"
                        className="form-control"
                        autoComplete='off'
                        value={props.name}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder='Digite o nome...' />
                </div>
            </div>

            <div className="col-12 col-md-5">
                <div className="form-group">
                    <label>Data de vigência</label>
                    <div className="col-12 d-flex justify-content-end">

                        <input type="date"
                            name="startDate"
                            id="startDate"
                            className="form-control"
                            autoComplete='off'
                            value={props.startDate}
                            onChange={e => props.updateField(e)}
                            onKeyPress={props.handleEnterPress}/>

                        <input type="date"
                            name="endDate"
                            id="endDate"
                            className="form-control"
                            autoComplete='off'
                            value={props.endDate}
                            onChange={e => props.updateField(e)}
                            onKeyPress={props.handleEnterPress}/>
                    </div>
                </div>
            </div>
        </div>

        <div className="row">
            <div className="col-2 col-md-12">
                <div className="form-group">
                    <label>Descrição</label>
                    <textarea type="text"
                        name="description"
                        id="description"
                        className="form-control"
                        autoComplete='off'
                        value={props.description}
                        onChange={e => props.updateField(e)}
                        onKeyPress={props.handleEnterPress}
                        placeholder='Digite a descrição...' />
                </div>
            </div>

        </div>

        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-success" onClick={props.save}>
                    <i className="fa fa-save mr-1"></i> Salvar
                </button>
                <button className="btn btn-danger ml-2" onClick={props.clear}>
                    <i className="fa fa-remove mr-1"></i> Cancelar
                </button>
            </div>
        </div>

    </div>