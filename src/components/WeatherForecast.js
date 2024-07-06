import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const API_KEY = '60c74da68f2df5aee43cf692d45754fd'; // API key yang telah ditetapkan

function WeatherForecast() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  // Meng-handle perubahan input kota
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  // Mengambil data cuaca dari API
  const fetchWeatherData = async () => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
      setWeatherData(response.data);
      setError('');
    } catch (error) {
      console.error('Error fetching weather data:', error);
      setWeatherData(null);
      setError('Kota tidak ditemukan. Mohon masukkan nama kota yang valid.');
    }
  };

  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        <Col sm={8}>
          <h2 className="text-center mb-3">Ramalan Cuaca</h2>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm="2">Masukkan Kota:</Form.Label>
              <Col sm="6">
                <Form.Control type="text" placeholder="Masukkan nama kota" value={city} onChange={handleCityChange} />
              </Col>
              <Col sm="2">
                <Button variant="primary" onClick={fetchWeatherData}>Dapatkan Cuaca</Button>
              </Col>
            </Form.Group>
          </Form>

          {weatherData && (
            <Card className="mt-4">
              <Card.Body>
                <Card.Title>{weatherData.name}, {weatherData.sys.country}</Card.Title>
                <Card.Text>
                  Cuaca: {weatherData.weather[0].main} - {weatherData.weather[0].description}<br />
                  Suhu: {weatherData.main.temp}°C<br />
                  Tekanan: {weatherData.main.pressure} hPa<br />
                  Kelembaban: {weatherData.main.humidity}%
                </Card.Text>
              </Card.Body>
            </Card>
          )}

          {error && (
            <Card className="mt-4">
              <Card.Body>
                <Card.Text className="text-danger">{error}</Card.Text>
              </Card.Body>
            </Card>
          )}
        </Col>
      </Row>
    </Container>
  );
}

export default WeatherForecast;