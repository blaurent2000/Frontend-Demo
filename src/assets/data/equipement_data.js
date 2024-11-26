// src/data/equipmentData.js

const equipmentData = [
    {
      equipment_id: 1,
      name: "Machine A",
      historical_data: [
        { date: "2024-01-01", hours_operated: 100, temperature: 45, vibration: 0.02, maintenance: "None" },
        { date: "2024-02-01", hours_operated: 200, temperature: 47, vibration: 0.03, maintenance: "Oil change" },
        { date: "2024-03-01", hours_operated: 300, temperature: 50, vibration: 0.05, maintenance: "Filter replacement" },
        { date: "2024-04-01", hours_operated: 400, temperature: 52, vibration: 0.06, maintenance: "None" },
        { date: "2024-05-01", hours_operated: 500, temperature: 55, vibration: 0.08, maintenance: "Lubrication" }
      ]
    },
    {
      equipment_id: 2,
      name: "Machine B",
      historical_data: [
        { date: "2024-01-01", hours_operated: 120, temperature: 40, vibration: 0.01, maintenance: "None" },
        { date: "2024-02-01", hours_operated: 220, temperature: 43, vibration: 0.02, maintenance: "Belt tension adjustment" },
        { date: "2024-03-01", hours_operated: 340, temperature: 48, vibration: 0.04, maintenance: "None" },
        { date: "2024-04-01", hours_operated: 460, temperature: 50, vibration: 0.05, maintenance: "Bearing inspection" },
        { date: "2024-05-01", hours_operated: 580, temperature: 53, vibration: 0.07, maintenance: "None" }
      ]
    },
    {
      equipment_id: 3,
      name: "Machine C",
      historical_data: [
        { date: "2024-01-01", hours_operated: 50, temperature: 35, vibration: 0.01, maintenance: "None" },
        { date: "2024-02-01", hours_operated: 150, temperature: 42, vibration: 0.03, maintenance: "Cooling system check" },
        { date: "2024-03-01", hours_operated: 250, temperature: 46, vibration: 0.04, maintenance: "None" },
        { date: "2024-04-01", hours_operated: 350, temperature: 49, vibration: 0.06, maintenance: "Motor check" },
        { date: "2024-05-01", hours_operated: 450, temperature: 52, vibration: 0.07, maintenance: "Filter replacement" }
      ]
    },
    {
      equipment_id: 4,
      name: "Machine D",
      historical_data: [
        { date: "2024-01-01", hours_operated: 80, temperature: 41, vibration: 0.03, maintenance: "None" },
        { date: "2024-02-01", hours_operated: 190, temperature: 45, vibration: 0.04, maintenance: "Oil change" },
        { date: "2024-03-01", hours_operated: 310, temperature: 49, vibration: 0.05, maintenance: "Gear inspection" },
        { date: "2024-04-01", hours_operated: 420, temperature: 52, vibration: 0.06, maintenance: "None" },
        { date: "2024-05-01", hours_operated: 530, temperature: 55, vibration: 0.08, maintenance: "Lubrication" }
      ]
    },
    {
      equipment_id: 5,
      name: "Machine E",
      historical_data: [
        { date: "2024-01-01", hours_operated: 200, temperature: 46, vibration: 0.02, maintenance: "None" },
        { date: "2024-02-01", hours_operated: 280, temperature: 49, vibration: 0.04, maintenance: "Motor inspection" },
        { date: "2024-03-01", hours_operated: 400, temperature: 52, vibration: 0.05, maintenance: "None" },
        { date: "2024-04-01", hours_operated: 530, temperature: 55, vibration: 0.07, maintenance: "Bearing replacement" },
        { date: "2024-05-01", hours_operated: 650, temperature: 580, vibration: 0.09, maintenance: "Cooling system check" }
      ]
    }
  ];
  
  export default equipmentData;
  