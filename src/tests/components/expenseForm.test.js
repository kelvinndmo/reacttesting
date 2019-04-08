import React from "react";
import { shallow } from "enzyme";
import ExpenseForm from "../../components/ExpenseForm";
import expenses from "../fixtures/expenses";

test("should  render ExpenseForm directly", () => {
  const wrapper = shallow(<ExpenseForm />);
  expect(wrapper).toMatchSnapshot();
});

test("should render expenseform with expenseData", () => {
  const wrapper = <ExpenseForm {...expenses[0]} />;
});

test("should render error for invalid form submission", () => {
  const wrapper = shallow(<ExpenseForm />);
  wrapper.find("form").simulate("submit", {
    preventDefault: () => {},
  });
  expect(wrapper.state("error").length).toBeGreaterThan(0);
  expect(wrapper).toMatchSnapshot();
});

test("should set description on input change", () => {
  const value = "new description";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(0)
    .simulate("change", {
      target: { value },
    });

  expect(wrapper.state("description")).toEqual(value);
});

test("should set amount", () => {
  const value = "5000";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value },
    });

  expect(wrapper.state("amount")).toEqual(value);
});

test("should not  set amount if invalid", () => {
  const value = "12.22.22";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("input")
    .at(1)
    .simulate("change", {
      target: { value },
    });

  expect(wrapper.state("amount")).toEqual("");
});

test("should set text area", () => {
  const area = "kelvin onkundi ndemo";
  const wrapper = shallow(<ExpenseForm />);
  wrapper
    .find("textarea")
    .at(0)
    .simulate("change", {
      target: { area },
    });
});
