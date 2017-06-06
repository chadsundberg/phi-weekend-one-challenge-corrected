$(document).ready(function(){
    // this is the function that gets the values in all of the following 5 fields, and assigns them to the named variables
  $('#submitNewEmployee').on('click', function(){
    var firstName = $('#firstName').val(); // gets value in firstName input box
    var lastName = $('#lastName').val(); // gets value in lastName input box
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();

// this code appends the values entered to the DOM in HTML table format (<tr> and <td>), and also appends a delete button
// the data-salary code, stores the value of the employee salary on the DOM so that if the employee is deleted, the salary is also deleted.
    $('#employeeTableBody').append(
      '<tr>' +
      '<td>' + firstName + '</td>' +
      '<td>' + lastName + '</td>' +
      '<td>' + idNumber + '</td>' +
      '<td>' + jobTitle + '</td>' +
      '<td>' + annualSalary + '</td>' +
      '<td><button class="deleteEmployeeButton" data-salary="' + annualSalary + '">Delete</button></td>' +
      '</tr>'
    );
    
    // this variable divides the employees yearly salary by 12 to find a monthly expense
    var newEmployeeMonthlyExpenses = annualSalary / 12;
    // this variable stores the previous monthly expense so that it can be added to the new employee monthly expense
    var previousMonthlyExpenses = $('#monthlyExpenses').text();
    // this code calculates the total and converts the string into a number
    var totalMonthlyExpenses = parseFloat(previousMonthlyExpenses) + parseFloat(newEmployeeMonthlyExpenses);
    $('#monthlyExpenses').text(totalMonthlyExpenses);
    // this code resets the form fields to empty
    $('.employeeFormInput').val('');
  });

// this code deletes the employee from the DOM, and recalculates the monthly salary expense
  $('#employeeTableBody').on('click', '.deleteEmployeeButton', function(){

    var deletedEmployeeSalary = $(this).data('salary');
    var deletedEmployeeMonthlyExpenses = deletedEmployeeSalary / 12;
    var previousMonthlyExpenses = $('#monthlyExpenses').text();
    var newTotalMonthlyExpenses = previousMonthlyExpenses - deletedEmployeeMonthlyExpenses;
    $('#monthlyExpenses').text(newTotalMonthlyExpenses);
    $(this).parent().parent().remove();
  });

});