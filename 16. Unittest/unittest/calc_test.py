import unittest
import calc


class TestCalc(unittest.TestCase):
    # inherite from TestCase

    def test_add(self):
    # the naming convention is important.
    # always test_*
        self.assertEqual(calc.add(10,5), 15)
        self.assertEqual(calc.add(-1,1), 0)
        self.assertEqual(calc.add(-1,-1), -2)
        
        # python -m unittest test_calc.py

    def test_division(self):
    # the naming convention is important.
    # always test_*
        self.assertRaises(ValueError, calc.divide, 10,1)

        # python -m unittest test_calc.py