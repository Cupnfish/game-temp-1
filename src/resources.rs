pub struct Map {
    value: Vec<Vec<i32>>,
}
impl Map {
    pub fn first() -> Self {
        let room_map = vec![
            vec![1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            vec![1, 0, 2, 2, 0, 4, 0, 0, 2, 0, 1, 7, 1],
            vec![1, 0, 1, 0, 1, 4, 1, 0, 1, 0, 1, 0, 1],
            vec![1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            vec![1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
            vec![1, 0, 0, 0, 0, 0, 6, 0, 0, 0, 5, 8, 1],
            vec![1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 1],
            vec![1, 0, 0, 6, 0, 6, 0, 0, 0, 0, 2, 0, 1],
            vec![1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 4, 1, 1],
            vec![1, 3, 8, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1],
            vec![1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
        ];
        Self { value: room_map }
    }

    pub fn map_value(&self) -> &Vec<Vec<i32>> {
        &self.value
    }
}
