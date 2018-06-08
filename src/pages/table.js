import React, { Component } from 'react'
import '../css/table.css'
import { FormControl, Form } from 'react-bootstrap'
import TableService from '../services/TableService';


export default class Table extends Component {
    constructor(props) {
      super(props)
      this.TableService = new TableService()
      this.state = {
          table:""

        // createSuccess: false,
        }
    }

    //
    handleChange(event){
      let table = event.target.value
      this.setState({table:table})
      console.log(this.state)
    }

    handleSubmit(event){
      event.preventDefault()
      console.log(this.state)
        this.TableService.setTable(this.state.table)
        // .then (successUser => {
        // console.log("Create Success!", successUser); this.setState({createSuccess: true})
      // })
      .catch(err =>{ alert(err) })
    }


    render() {

        return(

            <div className="container-4">
                <div className="box-7">
                    <div className="table-image">
                        <img src="/assets/images/tablechart2.png"/>
                    </div>
                </div>
                <form className="box-8">

                    <div class="form-group">
                        <label for="exampleSelect1">Choose Your Table</label>
                        <select class="form-control"
                            id="exampleSelect1" value={this.state.table}
                              onChange={this.handleChange.bind(this)}
                              >
                              <option>Table 1</option>
                              <option>Table 2</option>
                              <option>Table 3</option>
                              <option>Table 4</option>
                              <option>Table 5</option>

                        </select>

                    </div>

                    <button type="submit"  class="btn btn-success"
                        onClick={this.handleSubmit.bind(this)} >
                        Book Table
                    </button>


                </form>
            </div>
            )
        }
    }
