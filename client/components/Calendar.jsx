import React from 'react';


const Calendar = () => {
	return (
		<div className="row">
		  <div className="col-xs-4">
		    <div className="col">
		      <div className="calendar-sec">
			      <div className="month-name">
			        <p>January</p>
			      </div>
		        <div className="calendar">
		          <div className="calendar-dates">
		            <table>
		              <thead>
		                <tr>
		                  <th scope="col">Sun</th>
		                  <th scope="col">Mon</th>
		                  <th scope="col">Tue</th>
		                  <th scope="col">Wed</th>
		                  <th scope="col">Thu</th>
		                  <th scope="col">Fri</th>
		                  <th scope="col">Sat</th>
		                </tr>
		              </thead>
		              <tbody>
		                <tr> 
		                  <td>1</td>
		                  <td>2</td>
		                  <td>3</td>
		                  <td>4</td>
		                  <td>5</td>
		                  <td>6</td>
		                  <td>7</td>
		                </tr>
		                <tr> 
		                  <td>8</td>
		                  <td>9</td>
		                  <td>10</td>
		                  <td>11</td>
		                  <td>12</td>
		                  <td>13</td>
		                  <td>14</td>
		                </tr>
		                <tr> 
		                  <td>15</td>
		                  <td>16</td>
		                  <td>17</td>
		                  <td>18</td>
		                  <td>19</td>
		                  <td>20</td>
		                  <td>21</td>
		                </tr>
		                <tr> 
		                  <td>22</td>
		                  <td>23</td>
		                  <td>24</td>
		                  <td>25</td>
		                  <td>26</td>
		                  <td>27</td>
		                  <td>28</td>
		                </tr>
		                <tr> 
		                  <td>29</td>
		                  <td>30</td>
		                  <td>31</td>
		                </tr>
		              </tbody>
		            </table>
		          </div>
	          </div>
		      </div>
		    </div>
		  </div>
		</div>
		)
}

export default Calendar;