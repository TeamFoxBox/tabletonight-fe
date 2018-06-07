import React, { Component } from 'react'
import '../css/table.css'
import { FormControl, Form } from 'react-bootstrap'
import TableService from '../services/TableService';


export default class Table extends Component {
    constructor(props) {
      super(props)
      this.TableService = new TableService()
      this.state = {
          tables:[
            { name: "Table 1",
              booked : false
            },
            { name: "Table 2",
              booked : false
            },
            { name: "Table 3",
              booked : false
            },
            { name: "Table 4",
              booked : false
            },
            { name: "Table 5",
              booked : false
            }
        ]
        // createSuccess: false,
        }
    }


    handleChange(event){
      let { table } = this.state
      table[event.target.name] = event.target.value
      this.setState({booked: true})
      console.log(this.state)
    }

    handleSubmit(event){
      event.preventDefault()
        this.TableService.setTable(this.state.tables).then (successUser => {
        console.log("Create Success!", successUser); this.setState({createSuccess: true})
      })
      .catch(err =>{ alert(err) })
    }


    render() {
        let tables = this.state.tables
        return(

            <div className="container-4">
                <div className="box-7">
                    <div className="table-image">
                        <img src="/assets/images/tablechart2.png"/>
                    </div>
                </div>
                <div className="box-8">

                    <div class="form-group">
                        <label for="exampleSelect1">Choose Your Table</label>
                        <select class="form-control"
                            id="exampleSelect1"    onChange={this.handleChange.bind(this)}>
                            {tables.map(table =>
                            <option>
                            {table.name}
                            </option>)}
                        </select>

                    </div>

                    <button type="submit" class="btn btn-success"
                        onClick={this.handleSubmit.bind(this)} >
                        Book Table
                    </button>


                </div>
            </div>
            )
        }
    }
