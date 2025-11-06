# Blogging-websiteimport { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";
import EditCategory from "./EditCategory";
import { RouteAddCategory } from "@/helpers/RouteName";
import { Link } from "react-router-dom";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import getEnv from "@/helpers/getEnv";
import { useFetch } from "@/hooks/useFetch";
import Loading from "@/components/Loading";

const CategoryDetails = () => {
  const {
    data: categoryData,
    loading,
    error,
  } = useFetch(`${getEnv("VITE_API_BASE_URL")}/category/all-category`, {
    method: "get",
    credentials: "include",
  })


  if (loading) return <Loading />;

  return (
    <div>
      <Card>
        <CardHeader>
          <div>
            <Button>
              <Link to={RouteAddCategory}>Add Category</Link>
            </Button>
          </div>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Category</TableHead>
                <TableHead>Slug</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {categoryData && categoryData.category.length > 0 ? 
                categoryData.category.map((category) => (
                  <TableRow key={category._id}>
                    <TableCell>{category.name}</TableCell>
                    <TableCell>{category.slug}</TableCell>
                    <TableCell></TableCell>
                  </TableRow>
                ))
               : 
                <TableRow>
                  <TableCell colSpan="3">Data not found.</TableCell>
                </TableRow>
              }
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default CategoryDetails;



import { handleError } from "../helpers/handleError.js";
import Category from "../models/category.model.js";

export const addCategory = async (req, res, next) => {
    try {
        const { name, slug} = req.body
        const category = new Category({
            name, slug
        })

        await category.save()

        res.status(200).json({
            success: true,
            message: 'Category added successfully.'
        })

    } catch (error) {
        next(handleError(500, error.message))
    }
}

export const showCategory = async (req, res, next) => {
    try {

    } catch (error) {
        next(handleError(500, error.message))
    }
}

export const updateCategory = async (req, res, next) => {
    try {

    } catch (error) {
        next(handleError(500, error.message))
    }
}

export const deleteCategory = async (req, res, next) => {
    try {

    } catch (error) {
        next(handleError(500, error.message))
    }
}

export const getAllCategory = async (req, res, next) => {
    try {
        const category = await Category.find().sort({name: 1}).lean().exex()
        res.status(200).json({
            category
        })

    } catch (error) {
        next(handleError(500, error.message))
    }
}
