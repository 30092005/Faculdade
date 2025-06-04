import requests
from typing import Dict, Any

JAVA_BASE_URL = "http://localhost:8080/api"

def get_tarefas() -> list[Dict[str, Any]]:
    resp = requests.get(f"{JAVA_BASE_URL}/tarefas/")
    resp.raise_for_status()
    return resp.json()

def cria_tarefa(payload: dict) -> dict:
    resp = requests.post(f"{JAVA_BASE_URL}/tarefas/", json=payload)
    resp.raise_for_status()
    return resp.json()
