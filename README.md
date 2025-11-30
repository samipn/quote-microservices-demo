# Quotes Microservices Demo

This project contains:

- A monolithic Node.js application (`monolith/`)
- A microservices-based version split into:
  - `microservices/quotes-api`
  - `microservices/web-frontend`
- Kubernetes manifests in `k8s/`

Update Docker image names in `k8s/*.yaml` to match your registry, then:

```bash
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/quotes-api-deployment.yaml
kubectl apply -f k8s/quotes-api-service.yaml
kubectl apply -f k8s/web-frontend-deployment.yaml
kubectl apply -f k8s/web-frontend-service.yaml
```
