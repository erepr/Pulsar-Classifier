# Data Preprocessing

## Install Pycaret
```python
#install pycaret
pip install pycaret==2.0

# install awscli for deploy_model functionality
pip install awscli

#For Google Colab only
!pip install pycaret==2.0
from google.colab import drive
drive.mount('/content/gdrive')
```

## Loading Data
```python
df = pd.read_csv("HTRU_2.csv", header=None)
df.rename(columns={0: "mean_int_pf", 1: "std_pf", 2: "ex_kurt_pf", 3: "skew_pf", 4: "mean_dm", 5: "std_dm", 6: "kurt_dm", 7: "skew_dm", 8: "class"}, inplace = True)
df.index = df.index + 1
df

# Google Colab
df = pd.read_csv("/content/gdrive/My Drive/Colab Notebooks/HTRU_2.csv", header=None)
df.rename(columns={0: "mean_int_pf", 1: "std_pf", 2: "ex_kurt_pf", 3: "skew_pf", 4: "mean_dm", 5: "std_dm", 6: "kurt_dm", 7: "skew_dm", 8: "class"}, inplace = True)
df.index = df.index + 1
df
```

## Initializing the setup
```python
#import classification module 
from pycaret.classification import *

#intialize the setup
clf1 = setup(data = df, target = 'class', fix_imbalance_method = 'smote', remove_outliers = True, remove_multicollinearity = True, remove_perfect_collinearity = True)
```

| Class   | Method      | Description                          |
| ------- | ----------- | ------------------------------------ |
| setup   | `GET`       | :material-check:     Fetch resource  |
|         | `PUT`       | :material-check-all: Update resource |
|         | `DELETE`    | :material-close:     Delete resource |
