# Dockerfile

FROM cortexlabs/onnx-predictor-cpu-slim:0.18.1

RUN apt-get update \
    && apt-get install -y tree \
    && apt-get clean && rm -rf /var/lib/apt/lists/*

RUN pip install --no-cache-dir pandas \
    && conda install -y conda-forge::rdkit \
    && conda clean -a