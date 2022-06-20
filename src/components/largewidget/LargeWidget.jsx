import React from 'react';
import "./largewidget.css"

export default function LargeWidget() {
 // static page with some random info
  const Button=({type})=>{
    return <button className={'largewidgetButton ' + type}>{type}</button>
  }
  return (
    <div className='largewidget'>
      <h3 className="largewidgetTitle">Latest Transactions</h3>
      <table className="largewidgetTable">
        <tbody>
        <tr className='largewidgetTr'>
          <th >Customer</th>
          <th>Date</th>
          <th>Amount</th>
          <th >Status</th>
        </tr>
        <tr className="largewidgetTr">
          <td className="largewidgetUser">
            <img src="https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg"
            className="largewidgetImage"
            alt=""
          />
          <span className="largewidgetUsername">Mani</span>
          </td>
          <td className="largewidgetDate">2 june 2022</td>
          <td className="largewidgetAmount">$299</td>
          <td className="largewidgetStatus">
            <Button type="Approved"/>
          </td>
        </tr>
       
        <tr className="largewidgetTr">
          <td className="largewidgetUser">
            <img src="https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg"
            className="largewidgetImage"
            alt=""
          />
          <span className="largewidgetUsername">Mani</span>
          </td>
          <td className="largewidgetDate">2 june 2022</td>
          <td className="largewidgetAmount">$299</td>
          <td className="largewidgetStatus">
            <Button type="Pending"/>
          </td>
        </tr>
    
        <tr className="largewidgetTr">
          <td className="largewidgetUser">
            <img src="https://images.askmen.com/1080x540/2016/01/25-021526-facebook_profile_picture_affects_chances_of_getting_hired.jpg"
            className="largewidgetImage"
            alt=""
          />
          <span className="largewidgetUsername">Mani</span>
          </td>
          <td className="largewidgetDate">2 june 2022</td>
          <td className="largewidgetAmount">$299</td>
          <td className="largewidgetStatus">
            <Button type="Declined"/>
          </td>
        </tr>
        </tbody>
      </table>
    </div>
  )
}
