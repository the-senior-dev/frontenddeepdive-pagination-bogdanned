import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Pagination from './Pagination'


describe("Pagination", () => {

  test('The last and first button work as expected', async () => {
    // Arrange
    const pageTotal = 10; // fake
    const currentPage = 2; // mock
    const setCurrentPage = jest.fn(); // spy
    render(<Pagination pageTotal={pageTotal} currentPage={currentPage} setCurrentPage={setCurrentPage}/>)

    // ACT
    fireEvent.click(screen.getByTestId('btn-first'));

    // ASSERT:
    expect(setCurrentPage).toHaveBeenCalledTimes(1);
    expect(setCurrentPage).toHaveBeenCalledWith(1);


    // ACT
    fireEvent.click(screen.getByTestId('btn-last'));
    expect(setCurrentPage).toHaveBeenCalledTimes(2);
    expect(setCurrentPage).toHaveBeenCalledWith(10);

  })
})
