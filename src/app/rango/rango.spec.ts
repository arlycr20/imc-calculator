import { rango } from "./rango";


describe('unit Test Rango de Peso', () => {

    it('Recibe información rango 25.8 = sobrepeso', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = rango(25.8);

        // Assert
        expect(result).toBe('sobrepeso');
    })

    it('Recibe información rango 19.1 = peso normal', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = rango(19.1);

        // Assert
        expect(result).toBe('peso normal');
    })

    it('Recibe información rango 31.2 = obesidad 1', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = rango(31.2);

        // Assert
        expect(result).toBe('obesidad 1');
    })

    it('Recibe información rango 18.4 = peso bajo', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = rango(18.4);

        // Assert
        expect(result).toBe('peso bajo');
    })

    it('Recibe información rango 51.8 = obesidad 3', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = rango(51.8);

        // Assert
        expect(result).toBe('obesidad 3');
    })

    it('Recibe información rango 47.4 = obesidad 3', () => {
        // Pattern AAA (Arrange - Act - Assert)

        // Arrange
        let result = '';

        // Act
        result = rango(47.4);

        // Assert
        expect(result).toBe('obesidad 3');
    })

})     