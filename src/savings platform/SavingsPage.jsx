import React, { useState } from 'react';
import './SavingsPage.css';


const SavingsPage = () => {
  const [savingsData, setSavingsData] = useState([
    { 
        id: 1,
         name: 'Onadein Kehinde',
         age: '25',
         socioEconomicStatus: 'upper class',
         durationOfInvsetment: '2 years',
         amountSaved: 50000
         },
    { 
        id: 2,
         name: 'Oladehinde Christianah',
         age: '20',
         socioEconomicStatus: 'middle class',
         durationOfInvsetment: '7 months',
          amountSaved: 7500
         },
    { 
        id: 3,
         name: 'Otukoya Christianah',
         age: '22',
         socioEconomicStatus: 'middle class',
         durationOfInvsetment: '10 months',
         amountSaved: 10000
         },
    { 
        id: 4,
         name: 'Dada Rotimi',
         age: '23',
         socioEconomicStatus: 'upper class',
         durationOfInvsetment: '3 years',
          amountSaved: 30000
         },
    {
         id: 5,
          name: 'Dada Dabira',
          age: '19',
          socioEconomicStatus: 'upper class',
          durationOfInvsetment: '6 months',
           amountSaved: 50000
         },
    { 
        id: 6,
         name: 'Adigun Ayomide',
         age: '17',
         socioEconomicStatus: 'middle class',
         durationOfInvsetment: '5 years',
          amountSaved: 10000
         },
    { 
        id: 7,
         name: 'Salam Khadijah',
         age: '19',
         socioEconomicStatus: 'Upper class',
         durationOfInvsetment: '6 years',
          amountSaved: 2000 
        },
    {
        id: 8,
         name: 'Abraham Elizabeth',
         age: '25',
         socioEconomicStatus: 'middle class',
         durationOfInvsetment: '3 years',
          amountSaved: 23000
         },
    { id: 9,
         name: 'Sabitu Mayowa',
         age: '30',
         socioEconomicStatus: 'middle class',
         durationOfInvsetment: '5 months',
          amountSaved: 56000 
        },

        { id: 10,
            name: 'Bayowa Ahmed',
            age: '30',
            socioEconomicStatus: 'lower class',
            durationOfInvsetment: '7 years',
             amountSaved: 56000 
           },
  ]);

  const [newIntake, setNewIntake] = useState({ name: '',email: '', dateOfBirth:'',dateOfRegistration:'', socioEconomicStatus:'', durationOfInvsetment:'', amountSaved: '' });

  const handleInputChange = (e) => {
    setNewIntake({ ...newIntake, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const newId = savingsData.length + 1;
    const newSavingsData = [...savingsData, { id: newId, ...newIntake }];
    setSavingsData(newSavingsData);
    setNewIntake({name: '',email: '', dateOfBirth:'',dateOfRegistration:'', socioEconomicStatus:'', durationOfInvsetment:'', amountSaved: ''} );
  };

  return (
    <div className="savings-page">
        <div>
        <h1>Dolly-safe</h1>
        </div>
     

      {/* New Intake Form */}
      <form onSubmit={handleFormSubmit}>
        <h2>New Intake</h2>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={newIntake.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={newIntake.email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfBirth">Date of Birth:</label>
          
          <input
            type="date"
            id="dateOfBirth"
            name="dateOfBirth"
            value={newIntake.dateOfBirth}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="dateOfRegistration">Date of Registration:</label>
          <input
            type="date"
            id="dateOfRegistration"
            name="dateOfRegistration"
            value={newIntake.dateOfRegistration}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="socioEconomicStatus">Socio Economic Status:</label>
          <input
            type="text"
            id="socioEconomicStatus"
            name="socioEconomicStatus"
            value={newIntake.socioEconomicStatus}
            onChange={handleInputChange}
            required
          />
        </div>
        <div>
          <label htmlFor="durationOfInvestment">Duration Of Investment :</label>
          <input
            type="text"
            id="durationOfInvestment"
            name="durationOfInvestment"
            value={newIntake.durationOfInvestment}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="amount">Amount Saved:</label>
          <input
            type="text"
            id="amount"
            name="amount"
            value={newIntake.amount}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit">Add Intake</button>
      </form>

      <div className='spaced'></div>
      {/* Savings Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Socio Economic Status</th>
            <th>Duration of Investment</th>
            <th>Amount Saved</th>
          </tr>
        </thead>
        <tbody>
          {savingsData.map((savings) => (
            <tr key={savings.id}>
              <td>{savings.name}</td>
              <td>{savings.age}</td>
              <td>{savings.socioEconomicStatus}</td>
              <td>{savings.durationOfInvsetment}</td>
              <td>&#x20a6;{savings.amountSaved}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SavingsPage;
