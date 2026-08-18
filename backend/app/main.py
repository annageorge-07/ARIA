from fastapi import FastAPI

app = FastAPI(
    title="ARIA Backend",
    description="Adaptive Reasoning Intelligence for Attack Deception",
    version="1.0.0"
)


@app.get("/")
def root():
    return {
        "project": "ARIA",
        "status": "Backend Running",
        "version": "1.0.0"
    }


@app.get("/health")
def health():
    return {
        "status": "healthy"
    }