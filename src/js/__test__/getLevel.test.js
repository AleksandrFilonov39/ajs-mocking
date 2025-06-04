import fetchData from '../http';
import getLevel from '../getLevel'
jest.mock('../http');
beforeEach(() => {
    jest.resetAllMocks();
});

test('get right level', () => {
    fetchData.mockReturnValue({
        status: 'ok',
        level: 10
    });
    const data = getLevel(1);
   
    expect(fetchData).toHaveBeenCalledWith('https://server/user/1');
    expect(data).toBe('Ваш текущий уровень: 10')
});

test('get level return error', () => {
    fetchData.mockReturnValue({
        status: 'error',
    });
    const data = getLevel(2);
    expect(data).toBe('Информация об уровне временно недоступна')
});




