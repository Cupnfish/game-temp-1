use crate::utils::TILE_WIDTH;

pub struct Map {
    value: Vec<Vec<i32>>,
}
pub const MAX_HEIGHT: f32 = 11.0 * TILE_WIDTH;
pub const MAX_WIDTH: f32 = 13.0 * TILE_WIDTH;
impl Map {
    pub fn first() -> Self {
        let room_map = vec![
            vec![1, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 1],
            vec![1, 0, 2, 2, 0, 4, 0, 0, 2, 0, 0, 7, 1],
            vec![1, 0, 9, 0, 9, 4, 9, 0, 9, 0, 1, 0, 1],
            vec![1, 0, 0, 4, 0, 0, 0, 0, 0, 0, 1, 0, 1],
            vec![1, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 0, 1],
            vec![1, 0, 0, 0, 0, 0, 6, 0, 0, 0, 5, 8, 1],
            vec![1, 0, 9, 0, 9, 0, 9, 0, 9, 0, 9, 9, 1],
            vec![1, 0, 0, 6, 0, 6, 0, 0, 0, 0, 2, 0, 1],
            vec![1, 0, 9, 0, 9, 0, 9, 0, 9, 0, 4, 1, 1],
            vec![1, 3, 8, 0, 0, 0, 0, 0, 0, 0, 2, 0, 1],
            vec![9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9],
        ];
        Self { value: room_map }
    }

    pub fn map_value(&self) -> &Vec<Vec<i32>> {
        &self.value
    }
}
