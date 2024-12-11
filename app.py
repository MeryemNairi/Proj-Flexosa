from fastapi import FastAPI, UploadFile, File, Form, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import JSONResponse
import logging

logging.basicConfig(level=logging.INFO)
logger = logging.getLogger(__name__)

app = FastAPI()

# Configuration CORS simplifiée
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Autorise toutes les origines en développement
    allow_credentials=False,  # Important: doit être False quand allow_origins=["*"]
    allow_methods=["*"],
    allow_headers=["*"],
    expose_headers=["*"],
)

@app.post("/api/analyze")
async def analyze_xray(
    file: UploadFile = File(...),
    patient_name: str = Form(...),
    patient_dob: str = Form(...)
):
    logger.info(f"Receiving request for patient: {patient_name}")
    try:
        logger.info(f"File received: {file.filename}")
        return {
            "success": True,
            "message": f"Fichier {file.filename} reçu pour {patient_name}",
            "content_type": file.content_type,
            "patient_dob": patient_dob
        }
    except Exception as e:
        logger.error(f"Error: {str(e)}")
        raise HTTPException(status_code=500, detail=str(e))

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)