import React from 'react'
import {render, fireEvent, waitFor, screen} from '@testing-library/react'
import '@testing-library/jest-dom'
import Pagination from './Pagination'

test('loads and displays greeting', async () => {
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

    // ACT
    fireEvent.click(screen.getByTestId('btn-page-3'));
    expect(setCurrentPage).toHaveBeenCalledTimes(3);
    expect(setCurrentPage).toHaveBeenCalledWith(3);
})