// src/pages/Info.js
import React from 'react';
import { Card } from 'react-bootstrap';

const Info = () => {
  return (
    <div className="container my-5">
      <Card style={{ boxShadow: '0 4px 8px rgba(0,0,0,0.1)' }}>
        <Card.Body>
          <h2 className="mb-4">College Closet Original Idea– Clothing & Shoe Exchange Web Application</h2>
          <p>
            <strong>1. What does the website do?</strong>
          </p>
          <p>
            This web application is a campus-based clothing exchange platform where students can list, swap, or donate 
            clothes they no longer need. It serves as a sustainable and budget-friendly way for students to refresh 
            their wardrobes without spending money. Instead of a direct buy/sell model, users earn Swap Tokens when 
            they donate items, which they can use to claim other students’ clothes.
          </p>
          <p>
            Students can filter listings by clothing type, size, gender category, and condition, and coordinate meet-ups 
            or mail deliveries for exchanges. There will also be a donation option where students can choose to donate 
            clothes to local shelters or student organizations in need.
          </p>
          
          <p className="mt-4">
            <strong>2. Who will use it?</strong>
          </p>
          <ul>
            <li>College students who want to trade or donate clothes/shoes</li>
            <li>Eco-conscious students interested in sustainable fashion</li>
            <li>Low-income students who need affordable clothing options</li>
            <li>Campus organizations that collect clothing for donations</li>
          </ul>

          <p className="mt-4">
            <strong>3. What kind of data will it need?</strong>
          </p>
          <ul>
            <li>User Profiles (Name, School, Swap Token Balance, Clothing Preferences)</li>
            <li>Clothing Listings (Item Type, Size, Condition, Image, Availability)</li>
            <li>Transaction History (Clothes swapped, donations made, tokens earned/spent)</li>
            <li>Donation Records (Where donated items are sent)</li>
          </ul>

          <p className="mt-4">
            <strong>4. Key features needed:</strong>
          </p>
          <h5 className="mt-3">Home Page</h5>
          <ul>
            <li>Featured and trending clothing listings</li>
            <li>Search and filter options (size, type, gender, condition)</li>
          </ul>

          <h5 className="mt-3">User Dashboard</h5>
          <ul>
            <li>Track Swap Token balance</li>
            <li>View posted and claimed items</li>
          </ul>

          <h5 className="mt-3">Listing &amp; Swap System</h5>
          <ul>
            <li>Post clothing items with images and descriptions</li>
            <li>Request swaps using Swap Tokens</li>
          </ul>

          <h5 className="mt-3">Meet-Up Coordination</h5>
          <ul>
            <li>In-app chat for arranging swaps</li>
            <li>Suggested meet-up locations on campus</li>
          </ul>

          <h5 className="mt-3">Donation Option</h5>
          <ul>
            <li>Users can donate clothes and track impact</li>
            <li>Admin feature to list approved donation sites</li>
          </ul>

          <h5 className="mt-3">Review &amp; Rating System</h5>
          <ul>
            <li>Users can rate swap experiences</li>
            <li>Trusted swappers earn a “Verified Swapper” badge</li>
          </ul>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Info;
