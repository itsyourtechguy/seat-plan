const sampleData = {
  data: [
    ...Array.from({ length: 12 }, (_, i) => ({
      row_name: "A", seat_name: `${i + 1}`, position_left: 150 + i * 35, position_top: 50,
      width: 30, height: 30, seat_type: 1, seat_status: i % 3 === 0 ? 1 : 0, seat_selectable: i % 3 === 0 ? 0 : 1
    })),
    ...Array.from({ length: 14 }, (_, i) => ({
      row_name: "B", seat_name: `${i + 1}`, position_left: 120 + i * 35, position_top: 90,
      width: 30, height: 30, seat_type: 1, seat_status: i % 4 === 0 ? 1 : 0, seat_selectable: i % 4 === 0 ? 0 : 1
    })),
    ...Array.from({ length: 16 }, (_, i) => ({
      row_name: "C", seat_name: `${i + 1}`, position_left: 100 + i * 35, position_top: 130,
      width: 30, height: 30, seat_type: 1, seat_status: 0, seat_selectable: 1
    })),
    ...Array.from({ length: 16 }, (_, i) => ({
      row_name: "D", seat_name: `${i + 1}`, position_left: 100 + i * 35, position_top: 170,
      width: 30, height: 30, seat_type: 1, seat_status: 0, seat_selectable: 1
    })),
    ...Array.from({ length: 16 }, (_, i) => ({
      row_name: "E", seat_name: `${i + 1}`, position_left: 100 + i * 35, position_top: 210,
      width: 30, height: 30, seat_type: 1, seat_status: 0, seat_selectable: 1
    })),
    ...Array.from({ length: 18 }, (_, i) => ({
      row_name: "F", seat_name: `${i + 1}`, position_left: 70 + i * 35, position_top: 250,
      width: 30, height: 30, seat_type: 1, seat_status: 0, seat_selectable: 1
    })),
  ]
};

export default sampleData;