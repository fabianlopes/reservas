import { useState } from "react";
import { Form } from "react-bootstrap";

const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "grape", label: "Grape" },
  { value: "orange", label: "Orange" },
];

function SearchableSelect() {
  const [searchTerm, setSearchTerm] = useState("");
  const filteredOptions = options.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Form.Group controlId="formSelect">
        <Form.Label>Select a fruit</Form.Label>
        <Form.Control
          as="select"
          value={""}
          onChange={() => {}}
          custom
        >
          <option value="">Select an option</option>
          {filteredOptions.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </Form.Control>
      </Form.Group>
      <Form.Group controlId="formSearch">
        <Form.Label>Search for a fruit</Form.Label>
        <Form.Control
          type="text"
          placeholder="Search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </Form.Group>
    </>
  );
}

export default SearchableSelect;
