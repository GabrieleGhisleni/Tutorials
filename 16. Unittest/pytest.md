Naming convention is very important:

- File matching with "test_*"
- Functions have also to match the convention "test_*"

The approach is to develop is the **arrange, act, assert**, so basically what is the core action of the test, setting up the action and lastly the assertion.

the assertion in pytest are handled using:

```py
import pytest
with pytest.raises(CalculatorError):
    calculator.add("two", 3)

def add(self, a,b):
    self._check_operand(a,b)
    try:
        return a + b
    except TypeError:
        raise CalculatorError("hi mom")

def _check_operand(self, *args):
    for val in args:
        if (type(val) != int or type(val) != float):
            raise CalculatorError("not a number")
    
```

## **Parametrize decorator**

```py
@pytest.mark.parametrize(
    'a,b','expected', [
        (1,1,2),
        (2,1,3),
        (3,1,4),
        (4,1,5),
    ]
)

def test_with_param(a,b,expected):
    # all the previous example will be tested and compared to the expected!
    assert demo.add(a,b) == expected

```

in this case we are producing each of them as a individual test!

## grouping structure
the organization structure, grouping test using classes:


```py
class testAdd:
    @pytest.mark.parametrize(
        'a,b','expected', [
            (1,1,2),
            (2,1,3),
            (3,1,4),
            (4,1,5),
            ]
    )
    def test_with_param(self, a,b,expected):
        # all the previous example will be tested and compared to the expected!
        assert demo.add(a,b) == expected
```