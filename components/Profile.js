import React, { Component } from "react";
import Button from "./Button";
import Select from "react-select";
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

export default class Profile extends React.Component {
  submitForm(e) { 
    e.preventDefault();
  }

  render() {
    const { data,handleChange, update } = this.props;
    return (
      <form className="table-responsive" onSubmit={this.submitForm.bind(this)} >
      <table>
        <thead>
          <tr> 
            <th>Name<span className="resize-handle"></span></th>
            <th>Gender<span className="resize-handle"></span></th>
            <th>DOB<span className="resize-handle"></span></th>
            <th>Production<span className="resize-handle"></span></th>
            <th>Network<span className="resize-handle"></span></th>
            <th>Season<span className="resize-handle"></span></th>
            <th>Country<span className="resize-handle"></span></th>
            <th>credit<span className="resize-handle"></span></th>
            <th>IMDBLink<span className="resize-handle"></span></th>
            <th>Main Profile<span className="resize-handle"></span></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {data.map((data, key) => (
            <tr key={key}>
              <td> 
                <input 
                  name="name" 
                  value={data.name}
                  type="text"
                  onChange={((e)=>handleChange(key, e))}
                />
              </td>
              <td> 
                <select name='gender' value={data.gender} onChange={((e)=>handleChange(key, e))}>
                      <option value="female">Female</option>
                      <option value="male">Male</option>
                      <option value="non-binary">Non-Binary</option>
                </select>
              </td>
              <td>
                <input
                      type="date"
                      value={data.dob.split('T')[0]}
                      name="dob"
                      onChange={((e)=>handleChange(key, e))}
                />
              </td>
              <td>
                <input
                  name="production"
                  value={data.production}
                  type="text"
                  onChange={((e)=>handleChange(key, e))}
                />
              </td>
              <td>
                <input
                  name="network"
                  value={data.network}
                  type="text"
                  onChange={((e)=>handleChange(key, e))}
                />
              </td>
              <td>
              <select name='season' value={data.season} onChange={((e)=>handleChange(key, e))}>
                      <option value="winter">Winter</option>
                      <option value="spring">spring</option>
                      <option value="summer">summer</option>
                      <option value="fall">fall</option>
                    </select>
              </td>
              <td>
                <input 
                  name="country"
                  value={data.country} 
                  type="text"
                  onChange={((e)=>handleChange(key, e))}
                />
              </td>
              <td>
              <select name='credit' value={data.credit} onChange={((e)=>handleChange(key, e))}>
                      <option value="acting">acting</option>
                      <option value="directing">directing</option>
                      <option value="writing">writing</option>
                      <option value="showrunning">showrunning</option>
                    </select>
              </td>
              <td>
                <input 
                  name="imdb_link"
                  value={data.imdb_link} 
                  type="text"
                  onChange={((e)=>handleChange(key, e))}
                />
              </td>
              <td>
                  <select name='main_profile' value={data.main_profile} onChange={((e)=>handleChange(key, e))}>
                      <option value="true">true</option>
                      <option value="false">false</option>
                  </select>
              </td>
              <td>
                <Button
                  id={data.id}
                  title={"Delete"}
                  action={this.props.delete}
                />
                <input className="submit" type="submit" value="Edit" onClick={(()=>update(data.id))}/>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </form>
    );
  }
}